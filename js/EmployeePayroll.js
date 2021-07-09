window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const innerHtml = `
    <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>State Date</th>
        <th>Actions</th>
    </tr>
    <tr>
        <td>
            <img src="/Employee Payroll HTML/assets/profile-images/Ellipse -2.png" alt="profile-images" class="profile">
        </td>
        <td>Narayan Mahadevan</td>
        <td>Male</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>300000</td>
        <td>1 Noc 2020</td>
        <td>
            <img src="/Employee Payroll HTML/assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
            <img src="/Employee Payroll HTML/assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
    </tr>
    `;
    document.querySelector('#display').innerHTML = innerHtml;
}