// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.CT.Inputs
{

    public sealed class ContainerMemoryGetArgs : Pulumi.ResourceArgs
    {
        [Input("dedicated")]
        public Input<int>? Dedicated { get; set; }

        [Input("swap")]
        public Input<int>? Swap { get; set; }

        public ContainerMemoryGetArgs()
        {
        }
    }
}