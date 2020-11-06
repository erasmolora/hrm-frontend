import { gql } from 'apollo-boost';

const GET_CONFIGURATION = gql`
    query($organizationId: UUID!){
        payrollConfiguration(organization: $organizationId){ id },
        payrolls(organization: $organizationId){ id, monthLabel, dateApply},
        collaborators(organization: $organizationId){ id },
        typePayrolls{ name, id },
        lawDiscounts{ name, porcentage },
    }
`;

const GET_PAYROLLS = gql`
    query($organizationId: UUID!){
        payrolls(organization: $organizationId){
            value: id, label: dateApply
        },
    }
`;


const GET_PAYROLL_COLLABORATOR = gql`
    query($organizationId: UUID!, $payrollId: UUID){
        payrollCollaborators(
            organization: $organizationId,
            payroll: $payrollId
        ){
            id, collaborator {id, name}
        },
    }
`;


export default { GET_CONFIGURATION, GET_PAYROLLS, GET_PAYROLL_COLLABORATOR };
