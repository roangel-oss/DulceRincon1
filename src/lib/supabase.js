import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://chttzydczbcwdgyzarrn.supabase.co';
const SUPABASE_KEY = 'sb_publishable_eGPj8QVdA8e-Nq4R26UjEA_CY3p6ODy';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
