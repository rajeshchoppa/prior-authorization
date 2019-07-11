export class PredictionUnit  {
    public procedureCode:string;
    public diagnosisCode: string;
    public covered: boolean;
    public preAuthRequired: boolean;
    public insurerPercentiles: Map<number,number>;
    public memberPercentiles: Map<number,number>;
    public providerPercentiles: Map<number,number>;
}