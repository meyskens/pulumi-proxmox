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
    public sealed class VirtualMachineInitializationIpConfigIpv6
    {
        public readonly string? Address;
        public readonly string? Gateway;

        [OutputConstructor]
        private VirtualMachineInitializationIpConfigIpv6(
            string? address,

            string? gateway)
        {
            Address = address;
            Gateway = gateway;
        }
    }
}
