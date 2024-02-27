import prompts from 'prompts'
import { MessageWay, isMessageWayError } from 'messageway'
import { paste } from 'copy-paste'

// const msg = new MessageWay()

(async () => {
    const mainMenuPrompt = await prompts({
        type: 'select',
        name: 'mainMenu',
        message: 'Select one of following Ways:',
        choices: [
            { title: '1. Send', value: 1, description: 'Send message using SMS, IVR, Messangers and Smart way' },
            { title: '2. Get Status', value: 2, description: 'Get status of specific message' },
            { title: '3. Verify', value: 3, description: 'Verify automatic OTPs' },
        ]
    })

    const mainMenu = mainMenuPrompt.mainMenu

    if (mainMenu === 1) {
        const res = await prompts({
            type: 'select',
            name: 'sendMenu',
            message: 'How do you want to send a message?',
            choices: [
                { title: '1. SMS', value: 1, description: 'With some providers...' },
                { title: '2. Messanger', value: 2, description: 'Gap and IGap' },
                { title: '3. IVR', value: 3, description: 'IVR message...' },
                { title: '4. Smart', value: 4, description: 'Compact of SMS and Messanger method' },
            ]
        })
    }

    // console.log(paste());
})()

