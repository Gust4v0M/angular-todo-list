import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarTarefasComponent } from './tarefas/editar-tarefas/editar-tarefas.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    EditarTarefasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    provideClientHydration()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
