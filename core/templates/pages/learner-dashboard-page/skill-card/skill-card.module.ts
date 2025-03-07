// Copyright 2024 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Module for the the skill card component.
 */

import 'core-js/es7/reflect';
import 'zone.js';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {SkillCardComponent} from './skill-card.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgCircleProgressModule.forRoot({
      radius: 16,
      outerStrokeWidth: 2,
      innerStrokeWidth: 2,
      space: -2,
      innerStrokeColor: '#e7e8ea',
      outerStrokeColor: '#00645c',
      showBackground: false,
      showSubtitle: false,
      titleFontSize: '11',
      titleColor: '#00645c',
    }),
  ],
  declarations: [SkillCardComponent],
  entryComponents: [SkillCardComponent],
  exports: [SkillCardComponent],
})
export class SkillCardModule {}
