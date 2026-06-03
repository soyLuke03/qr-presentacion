import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environmentDev } from '../environment/environtment.dev';
import { FormSubmission } from '../models/formSubmission/formSubmission.model';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {


  private supabase = createClient(
    environmentDev.supabaseUrl,
    environmentDev.supabaseAnonKey
  );

  async guardarLead(data: FormSubmission) {
    const response = await this.supabase
      .from('leads')
      .insert([data]);
  }
}
