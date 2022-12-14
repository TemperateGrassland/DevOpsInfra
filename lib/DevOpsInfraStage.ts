import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { DevOpsInfraStack } from './DevOpsInfraStack';

/**
 * Deployable unit of web service app
 */
export class DevOpsInfraStage extends Stage {
    public readonly urlOutput: CfnOutput;

    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        const service = new DevOpsInfraStack(this, 'WebService');

        // Expose CdkpipelinesDemoStack's output one level higher
        this.urlOutput = service.urlOutput;
    }
}