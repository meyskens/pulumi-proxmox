// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.VM.Inputs
{

    public sealed class VirtualMachineDiskSpeedArgs : Pulumi.ResourceArgs
    {
        [Input("read")]
        public Input<int>? Read { get; set; }

        [Input("readBurstable")]
        public Input<int>? ReadBurstable { get; set; }

        [Input("write")]
        public Input<int>? Write { get; set; }

        [Input("writeBurstable")]
        public Input<int>? WriteBurstable { get; set; }

        public VirtualMachineDiskSpeedArgs()
        {
        }
    }
}
