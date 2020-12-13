// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.CT.Inputs
{

    public sealed class ContainerInitializationUserAccountArgs : Pulumi.ResourceArgs
    {
        [Input("keys")]
        private InputList<string>? _keys;
        public InputList<string> Keys
        {
            get => _keys ?? (_keys = new InputList<string>());
            set => _keys = value;
        }

        [Input("password")]
        public Input<string>? Password { get; set; }

        public ContainerInitializationUserAccountArgs()
        {
        }
    }
}
