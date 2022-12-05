import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { BPropertyComponent } from './b-property/b-property.component';
import { AttributeClassStyleComponent } from './attribute-class-style/attribute-class-style.component';
import { EventComponent } from './event/event.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { CustomPipe } from './custom.pipe';
import { FPipeComponent } from './f-pipe/f-pipe.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NInputComponent } from './n-input/n-input.component';
// import { RootComponent } from './root/root.component';
import { OOutComponent } from './o-output/o-out.component';
import { GameNumbersComponent } from './game-numbers/game-numbers.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating/rating.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { UTemplateDrivenComponent } from './u-template-driven/u-template-driven.component';
import { VDataDrivenComponent } from './v-data-driven/v-data-driven.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
// import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    BPropertyComponent,
    AttributeClassStyleComponent,
    EventComponent,
    TwoWayComponent,
    CustomPipe,
    FPipeComponent,
    TemplateVariableComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
    NInputComponent,
    // RootComponent,
    OOutComponent,
    GameNumbersComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent,
    UTemplateDrivenComponent,
    VDataDrivenComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
