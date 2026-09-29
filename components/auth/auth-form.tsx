"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FacebookIcon, GoogleIcon } from "@/components/auth/auth-icons";

type AuthMode = "sign-in" | "sign-up";

type AuthFormProps = {
  mode: AuthMode;
};

const fieldClassName =
  "h-13 w-full rounded-xl border border-input bg-background px-5 text-base text-foreground outline-none transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40";

export function AuthForm({ mode }: AuthFormProps) {
  const isSignUp = mode === "sign-up";
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="w-full">
      <p className="text-sm font-medium text-primary">
        {isSignUp ? "Create an Account" : "Sign In"}
      </p>
      <h1 className="mt-2 max-w-sm text-4xl font-semibold leading-[1.08] text-foreground sm:text-5xl">
        {isSignUp ? "Welcome to ByteSpace" : "Welcome Back"}
      </h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
        {isSignUp
          ? "Create your account and start learning with ByteSpace."
          : "Sign in to continue learning and pick up where you left off."}
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        {isSignUp ? (
          <div className="space-y-2">
            <label
              htmlFor="full-name"
              className="text-sm font-medium text-foreground"
            >
              Full Name
            </label>
            <input
              id="full-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jamie Davis"
              className={fieldClassName}
              required
            />
          </div>
        ) : null}

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            className={fieldClassName}
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-foreground"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete={isSignUp ? "new-password" : "current-password"}
              placeholder="Enter your password"
              className={`${fieldClassName} pr-12`}
              minLength={8}
              required
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              onClick={() => setShowPassword((visible) => !visible)}
              className="absolute inset-y-0 right-0 inline-flex w-12 items-center justify-center rounded-r-xl text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {showPassword ? (
                <EyeOff className="size-5" aria-hidden="true" />
              ) : (
                <Eye className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            variant="secondary"
            size="md"
            className="w-fit px-7"
          >
            {isSignUp ? "Continue" : "Sign In"}
          </Button>
        </div>
        <p
          aria-live="polite"
          role="status"
          className="min-h-5 text-sm text-muted-foreground"
        >
          {submitted
            ? "This demo form is ready to connect to your auth service."
            : ""}
        </p>
      </form>

      {!isSignUp ? (
        <>
          <div className="my-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            <span>Or continue with</span>
            <span className="h-px flex-1 bg-border" />
              </div>
              <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-2xl border border-border hover:bg-accent p-3"
            >
              <FacebookIcon className="size-5 " />
            </button>
            <button
              type="button"
              className="rounded-2xl border border-border hover:bg-accent p-3"
            >
              <GoogleIcon className="size-5" />
            </button>
          </div>
        </>
      ) : null}

      <p className="mt-14 text-center text-sm text-muted-foreground ">
        {isSignUp ? "Already have an account?" : "New user?"}{" "}
        <Link
          href={isSignUp ? "/sign-in" : "/sign-up"}
          className="font-medium text-primary hover:underline"
        >
          {isSignUp ? "Login" : "Create an account"}
        </Link>
      </p>
    </div>
  );
}
