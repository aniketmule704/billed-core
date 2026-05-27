import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
    env: {
      NEXT_PUBLIC_SUPABASE_URL: 'https://qdnmuoyqpqdewepzuezp.supabase.co',
      SUPABASE_SERVICE_ROLE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkbm11b3lxcHFkZXdlcHp1ZXpwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODA2ODI3NCwiZXhwIjoyMDkzNjQ0Mjc0fQ.ZLTFANOzqaUpqnTgOm213RBIzy-I9HJGdK5CU_axXB4',
    },
  },
})
