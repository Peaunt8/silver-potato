import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jthxfmrjmkxtfvpanytd.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0aHhmbXJqbWt4dGZ2cGFueXRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTExNjI2OTQsImV4cCI6MTk2NjczODY5NH0.ARXqekfi4TyyT8YIxAJNOZQjDr48_MYj3n4CtXiljo4'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



