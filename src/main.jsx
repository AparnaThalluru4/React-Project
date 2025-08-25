import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import {Login} from "./components/login/login.jsx"
import { DataBinding1 } from './components/data-binding/data-binding1.jsx'
import { DateExample } from './components/data-binding/date-and-regExp.jsx'
import { EventBinding } from './components/event-binding/event-binding.jsx'
import { MouseOverDemo } from './components/mouse-demo/mouse-over-demo.jsx'
import { MouseAnimation } from './components/mouse-demo/mouse-animation.jsx'
import { MouseMove } from './components/mouse-demo/mouse-move.jsx'
import { EmiCalculator } from './components/emi-calculator/emi-calculator.jsx'
import { ButtonDemo } from './components/button-events/button-demo.jsx'
import { KeyDemo } from './components/keyboard-events/keyboard-demo.jsx'
import { ThrottleDemo } from './components/throttle/throttle.jsx'
import { StopWatch } from './components/throttle/stopWatch.jsx'
import { CarouselDemo } from './components/carousel-demo/carousel-demo.jsx'
import { FormDemo } from './components/Formik/formik-demo.jsx'
import { FormDemo1 } from './components/Formik/formik-demo1.jsx'
import { FormDemo2 } from './components/Formik/formik-demo2.jsx'
import { FormDemo3 } from './components/Formik/formik-demo3.jsx'
import { FormNew } from './components/form-new-v19/form-new.jsx'
import { HookForm } from './components/react-hook-form/react-hook-demo1.jsx'
import { CheckNavbar } from './controlled-components/navbarCheck1.jsx'
import { ControlledDemo } from './controlled-components/datagridCheck.jsx'
import { ConditionalDemo1 } from './conditional-demo/conditional-demo1.jsx'
import { ConditionalDemo2 } from './conditional-demo/conditional-demo2.jsx'
import { UseCapchaEx } from './hooks/useCapcha-ex.jsx'
import { ContextDemo } from './context-demo/context-demo.jsx'
import { FakestoreIndex } from './Fakestore/fakestore-index.jsx'
import { ReducerDemo } from './components/reducer-demo/reducer-demo.jsx'
import { PortfolioIndex } from './portfolio/portfolio-index.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <PortfolioIndex/>
  </StrictMode>,
)
