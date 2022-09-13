#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { DevOpsInfraPipelineStack } from '../lib/DevOpsInfraPipelineStack';

const app = new App();

new DevOpsInfraPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
    env: { account: '451883816125', region: 'eu-west-2' },
});

app.synth();