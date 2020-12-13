// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Proxmox.System
{
    public partial class Time : Pulumi.CustomResource
    {
        /// <summary>
        /// The local timestamp
        /// </summary>
        [Output("localTime")]
        public Output<string> LocalTime { get; private set; } = null!;

        /// <summary>
        /// The node name
        /// </summary>
        [Output("nodeName")]
        public Output<string> NodeName { get; private set; } = null!;

        /// <summary>
        /// The time zone
        /// </summary>
        [Output("timeZone")]
        public Output<string> TimeZone { get; private set; } = null!;

        /// <summary>
        /// The UTC timestamp
        /// </summary>
        [Output("utcTime")]
        public Output<string> UtcTime { get; private set; } = null!;


        /// <summary>
        /// Create a Time resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Time(string name, TimeArgs args, CustomResourceOptions? options = null)
            : base("proxmox:System/time:Time", name, args ?? new TimeArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Time(string name, Input<string> id, TimeState? state = null, CustomResourceOptions? options = null)
            : base("proxmox:System/time:Time", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Time resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Time Get(string name, Input<string> id, TimeState? state = null, CustomResourceOptions? options = null)
        {
            return new Time(name, id, state, options);
        }
    }

    public sealed class TimeArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The node name
        /// </summary>
        [Input("nodeName", required: true)]
        public Input<string> NodeName { get; set; } = null!;

        /// <summary>
        /// The time zone
        /// </summary>
        [Input("timeZone", required: true)]
        public Input<string> TimeZone { get; set; } = null!;

        public TimeArgs()
        {
        }
    }

    public sealed class TimeState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The local timestamp
        /// </summary>
        [Input("localTime")]
        public Input<string>? LocalTime { get; set; }

        /// <summary>
        /// The node name
        /// </summary>
        [Input("nodeName")]
        public Input<string>? NodeName { get; set; }

        /// <summary>
        /// The time zone
        /// </summary>
        [Input("timeZone")]
        public Input<string>? TimeZone { get; set; }

        /// <summary>
        /// The UTC timestamp
        /// </summary>
        [Input("utcTime")]
        public Input<string>? UtcTime { get; set; }

        public TimeState()
        {
        }
    }
}
