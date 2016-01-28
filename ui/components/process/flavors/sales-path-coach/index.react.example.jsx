/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import Tabs from 'ui/components/tabs/index.react';
import Button from 'ui/components/buttons/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import StatefulClass from 'ui/components/lib/stateful.react';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

// Something that never changes

// const complete = (
//   <Button flavor="brand" className={pf('path__complete no-flex m-left--small')}>
//     <SvgIcon className={pf('button__icon button__icon--left')} sprite="utility" symbol="check" />
//     Mark Status as Complete
//   </Button>
// );

// Something that can change

let Demo = props =>
  <div className={pf('demo-only')} {...props}>
    {props.children}
  </div>;

let Coach = props =>
  <div className={pf('path-coach')}>
    {props.children}
  </div>;

let Path = props =>
  <div className={pf('path__row grid')}>
    {props.children}
  </div>;

let Trigger = props =>
  <ButtonIcon
    flavor="icon-small"
    className="path__trigger no-flex m-right--small"
    sprite="utility"
    symbol="chevrondown"
    assistiveText="Open" />;

let Action = props =>
  <Button flavor="brand" className={className(pf('button--small path__mark-complete no-flex m-left--small'), props.className)}>
    {props.children}
  </Button>;

let Tabsmain = props =>
  <div className={pf('tabs--path')} role="application">
    <ul className={pf('tabs--path__nav')}  role="tablist">
      {props.children}
    </ul>
  </div>;

let Tab = props =>
  <li className={className(pf('tabs--path__item'), props.className)} role="presentation">
    <a className={pf('tabs--path__link')} id="tabs-path-1" aria-controls="content-path-1" aria-selected="false" tabIndex="-1" role="tab" href="#void" aria-live="assertive">
      {props.children}
    </a>
  </li>;

let Coachcontent1 = props =>
  <div id="content-path-1" className={pf('tabs--path__content slds-hide')} role="tabpanel" aria-labelledby="tab-path-1">
    <h2>Item One Content</h2>
  </div>;

let Coachcontent2 = props =>
  <div id="content-path-2" className={pf('tabs--path__content slds-hide')} role="tabpanel" aria-labelledby="tab-path-2">
    <h2>Item Two Content</h2>
  </div>;

let Coachcontent3 = props =>
  <div id="content-path-3" className={pf('tabs--path__content slds-show')} role="tabpanel" aria-labelledby="tab-path-3">
    <div className={pf('grid grid--align-spread')}>
      <div className={pf('coach__keys size--1-of-2 m--left-x-large')}>
        <div className={pf('grid grid--align-spread')}>
          <h2 className={pf('text-heading--label p-bottom--small')}>Key Fields This Stage</h2>
          <span className={pf('text-body--small')}><a href="#void">Edit</a></span>
        </div>
        <dl className={pf('coach__list dl--horizontal')}>
          <dt className={pf('coach__item dl--horizontal__label')}>Expected Budget</dt>
          <dd className={pf('coach__value dl--horizontal__detail')}>$10,000</dd>
          <dt className={pf('coach__item dl--horizontal__label')}>Lead Source</dt>
          <dd className={pf('coach__value dl--horizontal__detail')}>Marketing and Web Referral</dd>
          <dt className={pf('coach__item dl--horizontal__label')}>Support Engineer</dt>
          <dd className={pf('coach__value dl--horizontal__detail')}><a href="#void">Jack Arthur</a></dd>
        </dl>
      </div>
      <div className={pf('coach__guidance size--1-of-2 m-left--x-large')}>
        <h2 className={pf('text-heading--label p-bottom--small has-divider--bottom')}>Guidance for Success</h2>
        <div className={pf('text-longform p-top--medium')}>
          <p>Regularly cross-sell related products using <a href="#void">cross-sell tactics and principles</a>.</p>
          <p>Prepare demo deck using the <a href="#void">latest template</a> and review with Marketing and Sales teams. Review demo copy with Legal and Doc team.</p>
          <p>Look up <a href="#void">needs analysis principles</a> and review selling plan with Sales Engineer.</p>
        </div>
      </div>
    </div>
  </div>;

let Coachcontent4 = props =>
  <div id="content-path-4" className={pf('tabs--path__content slds-hide')} role="tabpanel" aria-labelledby="tab-path-4">
    <h2>Item Four Content</h2>
  </div>;

let Coachcontent5 = props =>
  <div id="content-path-5" className={pf('tabs--path__content slds-hide')} role="tabpanel" aria-labelledby="tab-path-5">
    <h2>Item Five Content</h2>
  </div>;

///////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let StateA = props =>
  <Path>
    <Tabsmain>
      <Tab className={pf('is-complete')}>
        <span className={pf('tabs--path__stage')}>
          <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
          <span className={pf('assistive-text')}>Stage Complete</span>
        </span>
        <span className={pf('tabs--path__title')}>Contacted</span>
      </Tab>
      <Tab className={pf('is-complete')}>
        <span className={pf('tabs--path__stage')}>
          <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
          <span className={pf('assistive-text')}>Stage Complete</span>
        </span>
        <span className={pf('tabs--path__title')}>Open</span>
      </Tab>
      <Tab className={pf('is-current')}>
        <span className={pf('tabs--path__stage')}>
          <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
        </span>
        <span className={pf('tabs--path__title')}>Unqualified</span>
      </Tab>
      <Tab className={pf('is-incomplete')}>
        <span className={pf('tabs--path__stage')}>
          <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
        </span>
        <span className={pf('tabs--path__title')}>Nurturing</span>
      </Tab>
      <Tab className={pf('is-incomplete')}>
        <span className={pf('tabs--path__stage')}>
          <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
        </span>
        <span className={pf('tabs--path__title')}>Closed</span>
      </Tab>
    </Tabsmain>
  </Path>;

let StateB = props =>
  <Path>
    <Trigger />
    <Tabsmain>
      <Tab className={pf('is-complete')}>
        <span className={pf('tabs--path__stage')}>
          <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
          <span className={pf('assistive-text')}>Stage Complete</span>
        </span>
        <span className={pf('tabs--path__title')}>Contacted</span>
      </Tab>
      <Tab className={pf('is-complete')}>
        <span className={pf('tabs--path__stage')}>
          <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
          <span className={pf('assistive-text')}>Stage Complete</span>
        </span>
        <span className={pf('tabs--path__title')}>Open</span>
      </Tab>
      <Tab className={pf('is-current')}>
        <span className={pf('tabs--path__stage')}>
          <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
        </span>
        <span className={pf('tabs--path__title')}>Unqualified</span>
      </Tab>
      <Tab className={pf('is-incomplete')}>
        <span className={pf('tabs--path__stage')}>
          <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
        </span>
        <span className={pf('tabs--path__title')}>Nurturing</span>
      </Tab>
      <Tab className={pf('is-incomplete')}>
        <span className={pf('tabs--path__stage')}>
          <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
        </span>
        <span className={pf('tabs--path__title')}>Closed</span>
      </Tab>
    </Tabsmain>
    <Action><SvgIcon className={pf('button__icon button__icon--left')} sprite="utility" symbol="check" />
    Mark Status as Complete</Action>
  </Path>;

let StateC = props =>
  <Demo>
    <Coach>
      <Path>
        <Trigger />
        <Tabsmain>
          <Tab className={pf('is-complete')}>
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
              <span className={pf('assistive-text')}>Stage Complete</span>
            </span>
            <span className={pf('tabs--path__title')}>Contacted</span>
          </Tab>
          <Tab className={pf('is-complete')}>
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
              <span className={pf('assistive-text')}>Stage Complete</span>
            </span>
            <span className={pf('tabs--path__title')}>Open</span>
          </Tab>
          <Tab className={pf('is-current')}>
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            </span>
            <span className={pf('tabs--path__title')}>Unqualified</span>
          </Tab>
          <Tab className={pf('is-incomplete')}>
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            </span>
            <span className={pf('tabs--path__title')}>Nurturing</span>
          </Tab>
          <Tab className={pf('is-incomplete')}>
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            </span>
            <span className={pf('tabs--path__title')}>Closed</span>
          </Tab>
        </Tabsmain>
        <Action><SvgIcon className={pf('button__icon button__icon--left')} sprite="utility" symbol="check" />
          Mark Status as Complete</Action>
      </Path>
      <Coachcontent3 />
    </Coach>
  </Demo>;

let StateD = props =>
  <Demo>
    <Coach>
      <Path>
        <Trigger />
        <Tabsmain>
          <Tab className={pf('is-complete')}>
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
              <span className={pf('assistive-text')}>Stage Complete</span>
            </span>
            <span className={pf('tabs--path__title')}>Contacted</span>
          </Tab>
          <Tab className={pf('is-complete is-active')}>
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
              <span className={pf('assistive-text')}>Stage Complete</span>
            </span>
            <span className={pf('tabs--path__title')}>Open</span>
          </Tab>
          <Tab className={pf('is-current')}>
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            </span>
            <span className={pf('tabs--path__title')}>Unqualified</span>
          </Tab>
          <Tab className={pf('is-incomplete')}>
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            </span>
            <span className={pf('tabs--path__title')}>Nurturing</span>
          </Tab>
          <Tab className={pf('is-incomplete')}>
            <span className={pf('tabs--path__stage')}>
              <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            </span>
            <span className={pf('tabs--path__title')}>Closed</span>
          </Tab>
        </Tabsmain>
        <Action className={pf('path__mark-current')}>
          Mark as Current Stage</Action>
      </Path>
      <Coachcontent3 />
    </Coach>
  </Demo>;

let StateE = props =>
  <Demo>
    <Path>
      <Trigger />
      <Tabsmain>
        <Tab className={pf('is-incomplete')}>
          <span className={pf('tabs--path__stage')}>
            <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            <span className={pf('assistive-text')}>Stage Complete</span>
          </span>
          <span className={pf('tabs--path__title')}>Contacted</span>
        </Tab>
        <Tab className={pf('is-incomplete')}>
          <span className={pf('tabs--path__stage')}>
            <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            <span className={pf('assistive-text')}>Stage Complete</span>
          </span>
          <span className={pf('tabs--path__title')}>Open</span>
        </Tab>
        <Tab className={pf('is-incomplete')}>
          <span className={pf('tabs--path__stage')}>
            <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
          </span>
          <span className={pf('tabs--path__title')}>Unqualified</span>
        </Tab>
        <Tab className={pf('is-incomplete')}>
          <span className={pf('tabs--path__stage')}>
            <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
          </span>
          <span className={pf('tabs--path__title')}>Nurturing</span>
        </Tab>
        <Tab className={pf('is-lost')}>
          <span className={pf('tabs--path__stage')}>
            <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
          </span>
          <span className={pf('tabs--path__title')}>Closed Lost</span>
        </Tab>
      </Tabsmain>
      <Action>Change Closed State</Action>
    </Path>
  </Demo>;

let StateF = props =>
  <Demo>
    <Path>
      <Trigger />
      <Tabsmain>
        <Tab className={pf('is-complete')}>
          <span className={pf('tabs--path__stage')}>
            <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            <span className={pf('assistive-text')}>Stage Complete</span>
          </span>
          <span className={pf('tabs--path__title')}>Contacted</span>
        </Tab>
        <Tab className={pf('is-complete')}>
          <span className={pf('tabs--path__stage')}>
            <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
            <span className={pf('assistive-text')}>Stage Complete</span>
          </span>
          <span className={pf('tabs--path__title')}>Open</span>
        </Tab>
        <Tab className={pf('is-complete')}>
          <span className={pf('tabs--path__stage')}>
            <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
          </span>
          <span className={pf('tabs--path__title')}>Unqualified</span>
        </Tab>
        <Tab className={pf('is-complete')}>
          <span className={pf('tabs--path__stage')}>
            <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
          </span>
          <span className={pf('tabs--path__title')}>Nurturing</span>
        </Tab>
        <Tab className={pf('is-complete is-won')}>
          <span className={pf('tabs--path__stage')}>
            <SvgIcon className={pf('icon icon--x-small')} sprite="utility" symbol="check" />
          </span>
          <span className={pf('tabs--path__title')}>Closed Won</span>
        </Tab>
      </Tabsmain>
      <Action>Change Closed State</Action>
    </Path>
  </Demo>;


///////////////////////////////////////////////
// Export
//////////////////////////////////////////////


export let states = [
  {
    label: 'Default without Coaching',
    element: <StateA />
  }
  ,{
    label: 'Sales Path with Coaching Available',
    element: <StateB />
  },
  {
    label: 'Sales Path with Current Stage Coaching Visible',
    element: <StateC />
  },
  {
    label: 'Sales Path with Other Stage Selected',
    element: <StateD />
  },
  {
    label: 'Sales Path — Lost',
    element: <StateE />
  },
  {
    label: 'Sales Path — Won',
    element: <StateF />
  }
];
