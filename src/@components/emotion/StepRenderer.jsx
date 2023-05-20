import React from 'react'
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'

export default function StepRenderer({step, setStep}) {
    switch (step) {
        case '1':
          return <Question1 setStep={setStep} />;
        case '2':
          return <Question2 setStep={setStep} />;
        case '3':
          return <Question3 setStep={setStep} />;
        case '4':
          return <Question4 setStep={setStep} />;
    }
}
