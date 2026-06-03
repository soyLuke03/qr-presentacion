import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class Supabase {


  private supabase = createClient(
    'https://TU_PROYECTO.supabase.co',
    'TU_ANON_KEY'
  );

  async guardarLead(data: any) {
    return await this.supabase
      .from('leads')
      .insert([data]);
  }
}
