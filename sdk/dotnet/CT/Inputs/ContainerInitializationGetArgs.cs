// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.CT.Inputs
{

    public sealed class ContainerInitializationGetArgs : Pulumi.ResourceArgs
    {
        [Input("dns")]
        public Input<Inputs.ContainerInitializationDnsGetArgs>? Dns { get; set; }

        [Input("hostname")]
        public Input<string>? Hostname { get; set; }

        [Input("ipConfigs")]
        private InputList<Inputs.ContainerInitializationIpConfigGetArgs>? _ipConfigs;
        public InputList<Inputs.ContainerInitializationIpConfigGetArgs> IpConfigs
        {
            get => _ipConfigs ?? (_ipConfigs = new InputList<Inputs.ContainerInitializationIpConfigGetArgs>());
            set => _ipConfigs = value;
        }

        [Input("userAccount")]
        public Input<Inputs.ContainerInitializationUserAccountGetArgs>? UserAccount { get; set; }

        public ContainerInitializationGetArgs()
        {
        }
    }
}
