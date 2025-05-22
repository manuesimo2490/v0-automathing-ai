export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      automations: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          description: string
          status: "active" | "paused" | "error"
          steps: Json
          triggers: Json
          schedule: string | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          description: string
          status?: "active" | "paused" | "error"
          steps: Json
          triggers: Json
          schedule?: string | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          description?: string
          status?: "active" | "paused" | "error"
          steps?: Json
          triggers?: Json
          schedule?: string | null
          user_id?: string
        }
      }
      executions: {
        Row: {
          id: string
          created_at: string
          automation_id: string
          status: "success" | "error" | "running"
          duration: number
          error: string | null
          result: Json | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          automation_id: string
          status: "success" | "error" | "running"
          duration: number
          error?: string | null
          result?: Json | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          automation_id?: string
          status?: "success" | "error" | "running"
          duration?: number
          error?: string | null
          result?: Json | null
          user_id?: string
        }
      }
      profiles: {
        Row: {
          id: string
          updated_at: string
          first_name: string | null
          last_name: string | null
          avatar_url: string | null
          company: string | null
          preferences: Json | null
        }
        Insert: {
          id: string
          updated_at?: string
          first_name?: string | null
          last_name?: string | null
          avatar_url?: string | null
          company?: string | null
          preferences?: Json | null
        }
        Update: {
          id?: string
          updated_at?: string
          first_name?: string | null
          last_name?: string | null
          avatar_url?: string | null
          company?: string | null
          preferences?: Json | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Row"]
export type InsertTables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Insert"]
export type UpdateTables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Update"]
