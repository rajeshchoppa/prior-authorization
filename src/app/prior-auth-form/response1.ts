import { PredictionUnit } from './predictionUnit ';

export class Response1 {
    public memberId: number;
    public providerId: number;
    public lineOfService: string;
    public prediction:PredictionUnit;
    public additionalServices: PredictionUnit[];
}

