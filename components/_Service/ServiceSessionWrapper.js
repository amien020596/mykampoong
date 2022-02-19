import { useState } from 'react'
import { Button } from 'antd'
import ServiceSessionInput from './ServiceSessionInput'

const sessionControl = [
  {
    key: 'hours',
    title: 'Hours / Session',
    menu: [
      {
        value: '4',
        title: '4 hour'
      },
      {
        value: '5',
        title: '5 hour'
      },
    ]
  },
  {
    key: 'maxGuest',
    title: 'Max Guest / Session',
    menu: [
      {
        value: '10',
        title: '10 guest'
      },
      {
        value: '5',
        title: '5 guest'
      },
    ]
  },
]

export default function ServiceSessionWrapper() {
  const [sessions, setSessions] = useState([
    [
      {
        key: 'startTime-1',
        title: 'Start Time',
        menu: [
          {
            value: '07.00',
            title: '07.00'
          }
        ]
      },
      {
        key: 'endTime-1',
        title: 'End Time',
        disabled: true,
        menu: [
          {
            value: '11.00',
            title: '11.00'
          },
        ]
      },
    ]
  ])
  const handleAddSession = () => {
    setSessions(prev => {
      return [
        ...prev,
        [
          {
            key: `startTime-${prev.length + 1}`,
            title: 'Start Time',
            menu: [
              {
                value: '07.00',
                title: '07.00'
              }
            ]
          },
          {
            key: `endTime-${prev.length + 1}`,
            title: 'End Time',
            disabled: true,
            menu: [
              {
                value: '11.00',
                title: '11.00'
              },
            ]
          },
        ]
      ]
    })
  }
  return (
    <div>
      <ServiceSessionInput
        title='Session control'
        form={sessionControl}
      />
      {
        sessions.map((i, index) =>
          <ServiceSessionInput
            key={index}
            title={`Session ${index + 1}`}
            form={i}
          />
        )
      }
      <Button
        className='btn-black'
        onClick={handleAddSession}
        style={{
          marginLeft: 147,
          minWidth: 185
        }}
      >
        Add more session
      </Button>

    </div>
  )
}