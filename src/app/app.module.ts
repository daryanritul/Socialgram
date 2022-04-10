import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './pages/auth/auth.component';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PostsComponent } from './components/posts/posts.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    FeedsComponent,
    ChatsComponent,
    NotfoundComponent,
    PostsComponent,
    FriendsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }