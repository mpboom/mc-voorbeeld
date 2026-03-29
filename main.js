const DAGEN = {
    1: 'maandag',
    2: 'dinsdag',
    3: 'woensdag',
    4: 'donderdag',
    5: 'vrijdag',
    6: 'zaterdag',
    7: 'zondag',
};
const dagElement = document.getElementById('dag');
if (dagElement) {
    dagElement.innerText = DAGEN[(new Date()).getDay()];
}
