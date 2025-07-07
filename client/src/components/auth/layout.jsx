import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Panel */}
      <div className="hidden lg:flex w-1/2 bg-black items-center justify-center px-12">
        <div className="max-w-lg space-y-6 text-center text-primary-foreground">
          <h1 className="text-5xl font-extrabold tracking-tight leading-snug">
            Welcome to ECommerce Shopping
          </h1>
          <p className="text-lg opacity-75">
            Sign in to access exclusive deals and manage your orders seamlessly.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-10 space-y-8 border border-gray-200 overflow-hidden transform transition-transform duration-300 hover:scale-105">
          {/* Subtle Decorative Elements */}
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-white rounded-full opacity-20"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white rounded-full opacity-20"></div>

          {/* Render the form here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
