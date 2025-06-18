import React from "react";
import { User } from "lucide-react";
import Link from "next/link";

const Profile = () => {
  return (
    <Link href="/profile">
      <button
        className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
        aria-label="Sign in"
      >
        <User className="w-6 h-6" />
        <span className="text-xs mt-1">Profile</span>
      </button>
    </Link>
  );
};

export default Profile;
