import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';
import { FormsModule } from '@angular/forms';
import { ViewState } from '../../models/viewState/viewState.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class FormComponent {

  @Output() submitAnswer = new EventEmitter<ViewState>();

  constructor(
    private supabase: SupabaseService,
  ) { }

  debugMode: boolean = true;

  formData = {
    website: '', // honeypot
    name: '',
    age: null as number | null,
    instagram_account: '',
    extra_text: ''
  };

  isLoading = false;
  lastSubmitTime = 0;
  buttonText = 'Enviar →';

  submitActive = true;

  updateSubmitState() {
    this.submitActive =
      !!this.formData.name &&
      !!this.formData.age &&
      !!this.formData.instagram_account &&
      !this.formData.website; // honeypot vacío
  }

  async submit() {
    // 🪤 Honeypot anti-bot
    if (this.formData.website) return;

    // 🚫 Validación mínima
    if (!this.formData.name || !this.formData.age || !this.formData.instagram_account) return;

    // ⏳ Anti spam rápido
    const now = Date.now();
    if (now - this.lastSubmitTime < 5000) return;

    this.lastSubmitTime = now;

    // 🔄 UI loading state
    this.isLoading = true;
    this.buttonText = 'Enviando...';

    try {
      // 📡 Enviar a Supabase
      if (this.formData.age >= 18 && !this.debugMode) {
        await this.supabase.guardarLead({
          name: this.formData.name,
          age: this.formData.age,
          instagram_account: this.formData.instagram_account,
          extra_text: this.formData.extra_text
        });
      }

      // 🧼 reset opcional
      this.formData = {
        website: '',
        name: '',
        age: null,
        instagram_account: '',
        extra_text: ''
      };

      // 🎯 redirect a success
      this.submitAnswer.emit(ViewState.Success);

    } catch (error) {
      console.error('Error enviando formulario:', error);

      // 💥 feedback básico (opcional)
      this.buttonText = 'Error, intenta otra vez';

    } finally {
      this.isLoading = false;

      // 🔄 restaurar botón después de un poco
      setTimeout(() => {
        this.buttonText = 'Enviar →';
      }, 1500);
    }
  }
}