// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.VM.Inputs
{

    public sealed class VirtualMachineInitializationIpConfigIpv4GetArgs : Pulumi.ResourceArgs
    {
        [Input("address")]
        public Input<string>? Address { get; set; }

        [Input("gateway")]
        public Input<string>? Gateway { get; set; }

        public VirtualMachineInitializationIpConfigIpv4GetArgs()
        {
        }
    }
}
