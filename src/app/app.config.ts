import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AngularFireModule } from "@angular/fire/compat"
import { AngularFireAuthModule } from "@angular/fire/compat/auth"
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { firebaseConfig } from './core/constants/constant';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    importProvidersFrom([
      AngularFireModule.initializeApp(firebaseConfig), 
      AngularFireAuthModule,
      AngularFireDatabase,
      AngularFirestore
    ])]
};
