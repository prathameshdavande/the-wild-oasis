import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mqbyunqtjfxxqlwbhjdi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xYnl1bnF0amZ4eHFsd2JoamRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMDg5ODUsImV4cCI6MjAzMzY4NDk4NX0.b4WL4xolwd0dxdmDML1lnVyrZ8_M7vj7SXnHLM9hu_s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
