import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

import {redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard'

import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin'])

const redirectLoggedInToHome = () => redirectLoggedInTo(['feeds'])

const routes: Routes = [{
    path : 'authentication',
    component : AuthComponent,
    canActivate : [AngularFireAuthGuard],
    data : {
        authGuardPipe : redirectLoggedInToHome
    }
},{
    path : 'feeds',
    component : FeedsComponent,
    canActivate : [AngularFireAuthGuard],
    data : {
        authGuardPipe : redirectUnauthorizedToLogin
    }
},{
    path : 'chats',
    component : ChatsComponent,
    canActivate : [AngularFireAuthGuard],
    data : {
        authGuardPipe : redirectUnauthorizedToLogin
    }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
