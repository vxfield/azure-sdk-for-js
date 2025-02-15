/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  NetworkFabricPatchParameters,
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update certain properties of the Network Fabric resource.
 *
 * @summary Update certain properties of the Network Fabric resource.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/preview/2023-02-01-preview/examples/NetworkFabrics_Update_MaximumSet_Gen.json
 */
async function networkFabricsUpdateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "resourceGroupName";
  const networkFabricName = "FabricName";
  const body: NetworkFabricPatchParameters = {
    annotation: "annotationValue",
    tags: { key1758: "" },
    terminalServerConfiguration: {
      password: "xxxxxxx",
      serialNumber: "234567",
      username: "username"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.networkFabrics.beginUpdateAndWait(
    resourceGroupName,
    networkFabricName,
    body
  );
  console.log(result);
}

async function main() {
  networkFabricsUpdateMaximumSetGen();
}

main().catch(console.error);
