// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.CT.Outputs
{

    [OutputType]
    public sealed class ContainerMemory
    {
        public readonly int? Dedicated;
        public readonly int? Swap;

        [OutputConstructor]
        private ContainerMemory(
            int? dedicated,

            int? swap)
        {
            Dedicated = dedicated;
            Swap = swap;
        }
    }
}
