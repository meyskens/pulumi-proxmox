// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.VM.Inputs
{

    public sealed class VirtualMachineNetworkDeviceGetArgs : Pulumi.ResourceArgs
    {
        [Input("bridge")]
        public Input<string>? Bridge { get; set; }

        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        [Input("macAddress")]
        public Input<string>? MacAddress { get; set; }

        [Input("model")]
        public Input<string>? Model { get; set; }

        [Input("rateLimit")]
        public Input<double>? RateLimit { get; set; }

        [Input("vlanId")]
        public Input<int>? VlanId { get; set; }

        public VirtualMachineNetworkDeviceGetArgs()
        {
        }
    }
}
