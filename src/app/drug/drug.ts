export class Drug {
    drugName: string;
    ndc: string;
    drugType: string;
    claim: Array<Claim>;
}

class Claim {
    rx: number;
    bin: number;
    dateDispense: string;
    qty: number;
    reFills: number;
    payor: string;
    plainPaid: number;
    patientPaid: number;
    totalAmount: number;
    medAmount: number;
}
