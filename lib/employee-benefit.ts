// Model for 2026: ordinary employment, 15% marginal income tax, no contribution
// discounts or caps. The employer contribution stays inside its exemption limit.
export const employeeBenefitModel = {
  monthlyContribution: 2000,
  employeeCount: 30,
  employerSocialRate: 0.248,
  employerHealthRate: 0.09,
  employeeSocialRate: 0.071,
  employeeHealthRate: 0.045,
  employeeTaxRate: 0.15,
  annualExemptionLimit: 50000,
} as const;

const m = employeeBenefitModel;
const employerSocial = Math.round(m.monthlyContribution * m.employerSocialRate);
const employerHealth = Math.round(m.monthlyContribution * m.employerHealthRate);
const employeeSocial = Math.round(m.monthlyContribution * m.employeeSocialRate);
const employeeHealth = Math.round(m.monthlyContribution * m.employeeHealthRate);
const employeeTax = Math.round(m.monthlyContribution * m.employeeTaxRate);
const employerWageCost = m.monthlyContribution + employerSocial + employerHealth;
const employeeNetWage = m.monthlyContribution - employeeSocial - employeeHealth - employeeTax;

export const employeeBenefitTotals = {
  employerSocial, employerHealth, employeeSocial, employeeHealth, employeeTax,
  employerWageCost, employeeNetWage,
  employerMonthlySaving: employerWageCost - m.monthlyContribution,
  employeeMonthlyDifference: m.monthlyContribution - employeeNetWage,
  annualContribution: m.monthlyContribution * 12,
  annualNetWage: employeeNetWage * 12,
  annualWageCost: employerWageCost * 12,
  annualEmployerSaving: (employerWageCost - m.monthlyContribution) * 12,
  companyAnnualWageCost: employerWageCost * 12 * m.employeeCount,
  companyAnnualContribution: m.monthlyContribution * 12 * m.employeeCount,
  companyAnnualNetWage: employeeNetWage * 12 * m.employeeCount,
  companyAnnualSaving: (employerWageCost - m.monthlyContribution) * 12 * m.employeeCount,
};
