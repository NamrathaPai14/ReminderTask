import React, { Component } from 'react';

import Reminder from './Reminder.component';

/**
 * @class ReminderContainer
 */
export class ReminderContainer extends Component {

    render() {
        return (
            <div>
                <Reminder />
            </div>
        );
    }
}

export default ReminderContainer;