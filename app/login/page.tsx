"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Shield } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState<"customer" | "shopkeeper">("customer")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const { customerLogin, shopkeeperLogin, isLoading, error } = useAuth()

  const handleInputChange = (e: { target: { name: any; value: any; type: any; checked: any } }) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (activeTab === "customer") {
      await customerLogin(formData.email, formData.password)
    } else {
      await shopkeeperLogin(formData.email, formData.password)
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Branding */}
      <div className="hidden md:flex md:w-2/5 bg-primary p-8 flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <Shield className="h-6 w-6" />
            <span className="text-xl font-bold">Sentinel</span>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-primary-foreground">Welcome back</h1>
          <p className="text-primary-foreground/80">Log in to your account to manage your documents and print jobs.</p>
        </div>
        <div className="text-sm text-primary-foreground/70">© 2025 SENTINEL. All rights reserved.</div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 p-8 flex flex-col">
        <div className="max-w-md w-full mx-auto flex-1 flex flex-col justify-center">
          <div className="space-y-2 mb-6">
            <h1 className="text-2xl font-bold tracking-tight">Log in to your account</h1>
            <p className="text-muted-foreground">Enter your email and password to access your account</p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as "customer" | "shopkeeper")}
            className="mb-6"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="customer">Customer</TabsTrigger>
              <TabsTrigger value="shopkeeper">Shopkeeper</TabsTrigger>
            </TabsList>
          </Tabs>

          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked as boolean })}
              />
              <label
                htmlFor="rememberMe"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log in"}
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href={`/signup?role=${activeTab}`} className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm0-3a1 1 0 110 2 1 1 0 010-2zm0-10a1 1 0 011 1v6a1 1 0 11-2 0V8a1 1 0 011-1z" />
              </svg>
              <span>Secure login protected by reCAPTCHA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}