window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
    "<th>Salary</th><th>State Date</th><th>Actions</th>";
    let empPayrollList = createEmployeePayrollJSON()[0];
    let innerHtml = `${headerHtml}`;
    for(const empPayrollData of empPayrollList){
    innerHtml = `${innerHtml}
    <tr>
        <td>
            <img src="${empPayrollData._profilePic}" alt="profile-images" class="profile">
        </td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
            <img src="/Employee Payroll HTML/assets/icons/delete-black-18dp.svg" name="${empPayrollData._id}" alt="delete" id="1" onclick="remove(this)">
            <img src="/Employee Payroll HTML/assets/icons/create-black-18dp.svg" name="${empPayrollData,_id}"alt="edit" id="1" onclick="update(this)">
        </td>
    </tr>
    `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) =>{
    let deptHtml = ' ';
    for(const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label>${dept}</div>`
    }
    return deptHtml;
}
const createEmployeePayrollJSON = () =>{
    let employeePayrollListLocal = [
        {
            _name: 'Narayan Mahadevan',
            _gender: 'male',
            _department:[
                'Engineering',
                'Finance'
            ],
            _salary:'500000',
            _startDate:'29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/Employee Payroll HTML/assests/profile-images/Ellipse -2.png'
        },
        {
            _name:'Amarpa Shashanka Keerthi Kumar',
            _gender:'Female',
            _department:['Sales'],
            _salary: '400000',
            _startDate:'26 Oct 2020',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic:'/Employee Payroll HTML/assests/profile-images/Ellipse -1.png'
        }
    ];
}