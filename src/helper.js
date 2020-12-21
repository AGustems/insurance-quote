export function yearDifference(year) {
    return new Date().getFullYear() - year
}

export function calculateBrand(brand) {
    let increment;

    switch(brand){
        case 'european':
            increment = 1.30;
            break;
        case 'american':
            increment = 1.15;
            break;
        case 'asian':
            increment = 1.05;
            break;
        
        default:
            break;
    }

    return increment
}

export function obtainPlan(plan) {
    return (plan === "basic") ? 1.2 : 1.5;
}

export function capitalizeFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}