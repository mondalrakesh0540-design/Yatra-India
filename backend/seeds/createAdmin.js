import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import readline from 'readline';
import User from '../models/User.js';

dotenv.config();

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/yatra_india';

// Helper for interactive prompt
const askQuestion = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans.trim());
    })
  );
};

const run = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`\n======================================================`);
    console.log(`🛡️  YATRA INDIA — SECURE ADMIN CREATION UTILITY`);
    console.log(`======================================================`);
    console.log(`Connected to MongoDB: ${uri}\n`);

    // Parse CLI arguments if provided e.g. --name "Admin" --email "admin@yatraindia.com" --password "secret"
    const args = process.argv.slice(2);
    let name = '';
    let email = '';
    let password = '';
    let role = 'superadmin';

    for (let i = 0; i < args.length; i++) {
      if (args[i] === '--name' && args[i + 1]) name = args[i + 1];
      if (args[i] === '--email' && args[i + 1]) email = args[i + 1];
      if (args[i] === '--password' && args[i + 1]) password = args[i + 1];
      if (args[i] === '--role' && args[i + 1]) role = args[i + 1];
    }

    // If not provided in CLI args, prompt interactively or use defaults
    if (!name) {
      if (process.stdin.isTTY) {
        name = await askQuestion('Enter Admin Full Name (Default: Admin Yatra): ');
      }
      name = name || 'Admin Yatra';
    }

    if (!email) {
      if (process.stdin.isTTY) {
        email = await askQuestion('Enter Admin Email (Default: admin@yatraindia.com): ');
      }
      email = email || 'admin@yatraindia.com';
    }

    if (!password) {
      if (process.stdin.isTTY) {
        password = await askQuestion('Enter Secure Admin Password (Default: YatraAdmin2026!): ');
      }
      password = password || 'YatraAdmin2026!';
    }

    if (password.length < 6) {
      console.error('❌ Password must be at least 6 characters long.');
      process.exit(1);
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const existing = await User.findOne({ email: normalizedEmail });
    if (existing) {
      console.log(`\n⚠️  An account with email "${normalizedEmail}" already exists with role: "${existing.role}".`);
      if (existing.role === 'admin' || existing.role === 'superadmin') {
        console.log(`✅ This account is already an authorized administrator.`);
        console.log(`Updating password to ensure access...`);
        const salt = await bcrypt.genSalt(10);
        existing.passwordHash = await bcrypt.hash(password, salt);
        await existing.save();
        console.log(`✅ Admin password updated successfully.`);
      } else {
        console.log(`Elevating existing user to '${role}'...`);
        existing.role = role;
        const salt = await bcrypt.genSalt(10);
        existing.passwordHash = await bcrypt.hash(password, salt);
        await existing.save();
        console.log(`✅ User successfully elevated to ${role}.`);
      }
    } else {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      const newAdmin = await User.create({
        name,
        email: normalizedEmail,
        passwordHash,
        role,
        lastLogin: new Date()
      });

      console.log(`\n🎉 New Administrator account successfully created in MongoDB!`);
      console.log(`   ID:    ${newAdmin._id}`);
      console.log(`   Name:  ${newAdmin.name}`);
      console.log(`   Email: ${newAdmin.email}`);
      console.log(`   Role:  ${newAdmin.role}`);
    }

    console.log(`\n🔒 Admin Portal: http://localhost:5173/admin/login`);
    console.log(`======================================================\n`);
  } catch (err) {
    console.error(`❌ Admin creation error:`, err.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

run();
