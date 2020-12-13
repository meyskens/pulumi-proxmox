// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class Certifi extends pulumi.CustomResource {
    /**
     * Get an existing Certifi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertifiState, opts?: pulumi.CustomResourceOptions): Certifi {
        return new Certifi(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'proxmox:System/certifi:Certifi';

    /**
     * Returns true if the given object is an instance of Certifi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Certifi {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Certifi.__pulumiType;
    }

    /**
     * The PEM encoded certificate
     */
    public readonly certificate!: pulumi.Output<string>;
    /**
     * The PEM encoded certificate chain
     */
    public readonly certificateChain!: pulumi.Output<string | undefined>;
    /**
     * The expiration date
     */
    public /*out*/ readonly expirationDate!: pulumi.Output<string>;
    /**
     * The file name
     */
    public /*out*/ readonly fileName!: pulumi.Output<string>;
    /**
     * The issuer
     */
    public /*out*/ readonly issuer!: pulumi.Output<string>;
    /**
     * The node name
     */
    public readonly nodeName!: pulumi.Output<string>;
    /**
     * Whether to overwrite an existing certificate
     */
    public readonly overwrite!: pulumi.Output<boolean | undefined>;
    /**
     * The PEM encoded private key
     */
    public readonly privateKey!: pulumi.Output<string>;
    /**
     * The public key size
     */
    public /*out*/ readonly publicKeySize!: pulumi.Output<number>;
    /**
     * The public key type
     */
    public /*out*/ readonly publicKeyType!: pulumi.Output<string>;
    /**
     * The SSL fingerprint
     */
    public /*out*/ readonly sslFingerprint!: pulumi.Output<string>;
    /**
     * The start date
     */
    public /*out*/ readonly startDate!: pulumi.Output<string>;
    /**
     * The subject
     */
    public /*out*/ readonly subject!: pulumi.Output<string>;
    /**
     * The subject alternative names
     */
    public /*out*/ readonly subjectAlternativeNames!: pulumi.Output<string[]>;

    /**
     * Create a Certifi resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertifiArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertifiArgs | CertifiState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as CertifiState | undefined;
            inputs["certificate"] = state ? state.certificate : undefined;
            inputs["certificateChain"] = state ? state.certificateChain : undefined;
            inputs["expirationDate"] = state ? state.expirationDate : undefined;
            inputs["fileName"] = state ? state.fileName : undefined;
            inputs["issuer"] = state ? state.issuer : undefined;
            inputs["nodeName"] = state ? state.nodeName : undefined;
            inputs["overwrite"] = state ? state.overwrite : undefined;
            inputs["privateKey"] = state ? state.privateKey : undefined;
            inputs["publicKeySize"] = state ? state.publicKeySize : undefined;
            inputs["publicKeyType"] = state ? state.publicKeyType : undefined;
            inputs["sslFingerprint"] = state ? state.sslFingerprint : undefined;
            inputs["startDate"] = state ? state.startDate : undefined;
            inputs["subject"] = state ? state.subject : undefined;
            inputs["subjectAlternativeNames"] = state ? state.subjectAlternativeNames : undefined;
        } else {
            const args = argsOrState as CertifiArgs | undefined;
            if (!args || args.certificate === undefined) {
                throw new Error("Missing required property 'certificate'");
            }
            if (!args || args.nodeName === undefined) {
                throw new Error("Missing required property 'nodeName'");
            }
            if (!args || args.privateKey === undefined) {
                throw new Error("Missing required property 'privateKey'");
            }
            inputs["certificate"] = args ? args.certificate : undefined;
            inputs["certificateChain"] = args ? args.certificateChain : undefined;
            inputs["nodeName"] = args ? args.nodeName : undefined;
            inputs["overwrite"] = args ? args.overwrite : undefined;
            inputs["privateKey"] = args ? args.privateKey : undefined;
            inputs["expirationDate"] = undefined /*out*/;
            inputs["fileName"] = undefined /*out*/;
            inputs["issuer"] = undefined /*out*/;
            inputs["publicKeySize"] = undefined /*out*/;
            inputs["publicKeyType"] = undefined /*out*/;
            inputs["sslFingerprint"] = undefined /*out*/;
            inputs["startDate"] = undefined /*out*/;
            inputs["subject"] = undefined /*out*/;
            inputs["subjectAlternativeNames"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Certifi.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Certifi resources.
 */
export interface CertifiState {
    /**
     * The PEM encoded certificate
     */
    readonly certificate?: pulumi.Input<string>;
    /**
     * The PEM encoded certificate chain
     */
    readonly certificateChain?: pulumi.Input<string>;
    /**
     * The expiration date
     */
    readonly expirationDate?: pulumi.Input<string>;
    /**
     * The file name
     */
    readonly fileName?: pulumi.Input<string>;
    /**
     * The issuer
     */
    readonly issuer?: pulumi.Input<string>;
    /**
     * The node name
     */
    readonly nodeName?: pulumi.Input<string>;
    /**
     * Whether to overwrite an existing certificate
     */
    readonly overwrite?: pulumi.Input<boolean>;
    /**
     * The PEM encoded private key
     */
    readonly privateKey?: pulumi.Input<string>;
    /**
     * The public key size
     */
    readonly publicKeySize?: pulumi.Input<number>;
    /**
     * The public key type
     */
    readonly publicKeyType?: pulumi.Input<string>;
    /**
     * The SSL fingerprint
     */
    readonly sslFingerprint?: pulumi.Input<string>;
    /**
     * The start date
     */
    readonly startDate?: pulumi.Input<string>;
    /**
     * The subject
     */
    readonly subject?: pulumi.Input<string>;
    /**
     * The subject alternative names
     */
    readonly subjectAlternativeNames?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Certifi resource.
 */
export interface CertifiArgs {
    /**
     * The PEM encoded certificate
     */
    readonly certificate: pulumi.Input<string>;
    /**
     * The PEM encoded certificate chain
     */
    readonly certificateChain?: pulumi.Input<string>;
    /**
     * The node name
     */
    readonly nodeName: pulumi.Input<string>;
    /**
     * Whether to overwrite an existing certificate
     */
    readonly overwrite?: pulumi.Input<boolean>;
    /**
     * The PEM encoded private key
     */
    readonly privateKey: pulumi.Input<string>;
}
