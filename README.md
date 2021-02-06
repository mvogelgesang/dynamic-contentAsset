# dynamicContentAsset

An example component that dynamically renders a Salesforce Lightning $ContentAsset given the developer name of the file.

## The Issue

When rendering a [\$ContentAsset](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/expr_contentasset_value_provider.htm) in Salesforce, documentation points at the following convention `$ContentAsset.imageName`. This is all well and good if the image name is static and standardized. However, there are instances where you may ask the admin of a community or component to change the image. Rather than editing the component code, a preferable option is to provide a design attribute which takes in an image name and dynamically renders the correct ContentAsset. 

`$ContentAsset` only supports dot "." notation and entering `$ContentAsset[varName]` will return an error.

## Solution

This component builds upon the ideas outlined in https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/labels_dynamic.htm which discusses how to dynamically access `$Labels`. The conventions used in the `$Labels` example extend to `$ContentAsset`.

## Getting Started

### Pre-Requisites

* Apache Ant
* Salesforce-Ant.jar > v48.0

### Deployment & Configuration

`ant deployCode`

* Once deployed, go to Files in the Salesforce app picker
* Select Libraries from left hand pane
* Upload new image under Asset Library folder
* Copy the API Name of the file
* Check "Let guest users see this asset file on public and login pages"
* Save
* Open Experience Builder for your community
* Drag this component onto the page
* In the attributes menu, paste in the image API Name
