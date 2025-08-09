// supabase-client.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://ngqcgfeyalhwzhnonkwm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ncWNnZmV5YWxod3pobm9ua3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2Nzc5ODIsImV4cCI6MjA2ODI1Mzk4Mn0.jCtHBbDueMosU7vGGSBIBGM5Wda0wJpflP2PtYTocmA';
export const supabase = createClient(supabaseUrl, supabaseKey);
