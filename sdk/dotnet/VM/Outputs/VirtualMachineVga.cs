// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.VM.Outputs
{

    [OutputType]
    public sealed class VirtualMachineVga
    {
        public readonly bool? Enabled;
        public readonly int? Memory;
        public readonly string? Type;

        [OutputConstructor]
        private VirtualMachineVga(
            bool? enabled,

            int? memory,

            string? type)
        {
            Enabled = enabled;
            Memory = memory;
            Type = type;
        }
    }
}
