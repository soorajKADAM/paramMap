import { AquariusComponent } from './aquarius/aquarius.component';
import { AriesComponent } from './aries/aries.component';
import { CancerComponent } from './cancer/cancer.component';
import { CapricornComponent } from './capricorn/capricorn.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GeminiComponent } from './gemini/gemini.component';
import { LeoComponent } from './leo/leo.component';
import { LibraComponent } from './libra/libra.component';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../../YourSunSign/src/app/material.module';
import { NgModule } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { PiscesComponent } from './pisces/pisces.component';
import { SagittariusComponent } from './sagittarius/sagittarius.component';
import { ScorpioComponent } from './scorpio/scorpio.component';
import { SunsignHomeComponent } from './sunsign-home/sunsign-home.component';
import { SunsignsRoutingModule } from './sunsigns-routing.module';
import { TaurusComponent } from './taurus/taurus.component';
import { VirgoComponent } from './virgo/virgo.component';

@NgModule({
  declarations: [
    AriesComponent,
    TaurusComponent,
    GeminiComponent,
    CancerComponent,
    LeoComponent,
    VirgoComponent,
    LibraComponent,
    ScorpioComponent,
    SagittariusComponent,
    CapricornComponent,
    AquariusComponent,
    PiscesComponent,
    SunsignHomeComponent,
  ],
  imports: [CommonModule, SunsignsRoutingModule, MaterialModule, MatCardModule,NgParticlesModule,FlexLayoutModule],
})
export class SunsignsModule {}
