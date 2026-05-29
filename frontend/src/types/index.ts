export type Severity = 'Low' | 'Medium' | 'High' | 'Critical';
export interface Crop { id:number; name:string; description:string; status?:string; }
export interface Disease { id:number; cropType:string; name:string; scientificName?:string; symptoms:string[]; causes:string[]; treatment:string[]; prevention:string[]; severity:Severity; }
export interface Prediction { id:number; cropType:string; diseaseName:string; confidence:number; severity:Severity; imageUrl:string; possibleCauses:string[]; treatmentSuggestions:string[]; preventionTips:string[]; aiExplanation:string; notes?:string; createdAt:string; }
export interface ChatMessage { role:'user'|'assistant'; content:string; }
