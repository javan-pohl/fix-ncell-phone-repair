import * as React from 'react'

const Hours = (importClass = 'footerTableDayOfWeek') => (
  <>
    <thead>
      <tr>
        <th className={importClass}>Day</th>
        <th>Hours</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className={importClass}>Monday</td>
        <td>8:00am - 8:00pm</td>
      </tr>
      <tr>
        <td className={importClass}>Tuesday</td>
        <td>8:00am - 8:00pm</td>
      </tr>
      <tr>
        <td className={importClass}>Wednesday</td>
        <td>8:00am - 8:00pm</td>
      </tr>
      <tr>
        <td className={importClass}>Thursday</td>
        <td>8:00am - 8:00pm</td>
      </tr>
      <tr>
        <td className={importClass}>Friday</td>
        <td>8:00am - 6:00pm</td>
      </tr>
      <tr>
        <td className={importClass}>Saturday</td>
        <td>10:00am - 4:00pm</td>
      </tr>
      <tr>
        <td className={importClass}>Sunday</td>
        <td>Closed</td>
      </tr>
    </tbody>
  </>

)

export default Hours
